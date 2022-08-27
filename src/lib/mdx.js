import { join } from 'path';
import { readFileSync, readdirSync, accessSync, constants } from 'fs';
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import matter from 'gray-matter';

import i18nextConfig from '../../next-i18next.config';

export async function getFiles(type) {
  return readdirSync(join(process.cwd(), 'contents', type));
}

export async function getLocaleFile(locale, slug) {
  const fPath = join(process.cwd(), 'contents', 'locales', locale, `${slug}.mdx`);
  let isInRequestedLanguage = true;
  try {
    await accessSync(fPath, constants.R_OK);
  } catch (err) {
    locale = i18nextConfig.i18n.defaultLocale;
    isInRequestedLanguage = false;
  }
  const f = await getFileBySlug(`locales/${locale}`, slug);
  f.isInRequestedLanguage = isInRequestedLanguage;
  return f;
}

export async function getCountryLocaleFile(locale, country, slug) {
  const fPath = join(process.cwd(), 'contents', 'locales', locale, country, `${slug}.mdx`);
  let isInRequestedLanguage = true;
  try {
    await accessSync(fPath, constants.R_OK);
  } catch (err) {
    locale = i18nextConfig.i18n.defaultLocale;
    isInRequestedLanguage = false;
  }
  const f = await getFileBySlug(`locales/${locale}/${country}`, slug);
  f.isInRequestedLanguage = isInRequestedLanguage;
  return f;
}

export async function getCountryLocaleModuleFile(locale, country, slug) {
  const fPath = join(process.cwd(), 'contents', 'locales', locale, country, 'module', `${slug}.mdx`);
  let isInRequestedLanguage = true;
  try {
    await accessSync(fPath, constants.R_OK);
  } catch (err) {
    locale = i18nextConfig.i18n.defaultLocale;
    isInRequestedLanguage = false;
  }
  const f = await getFileBySlug(`locales/${locale}/${country}/module`, slug);
  f.isInRequestedLanguage = isInRequestedLanguage;
  return f;
}


export async function getFileBySlug(type, slug) {
  const fPath = slug
    ? join(process.cwd(), 'contents', type, `${slug}.mdx`)
    : join(process.cwd(), 'contents', `${type}.mdx`);
  const source = readFileSync(fPath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });
  return {
    source: mdxSource,
    frontMatter: data,
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = readdirSync(join(process.cwd(), 'contents', type));
  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), 'contents', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ];
  }, []);
}
