import React from 'react';
import GithubCorner from '@uiw/react-github-corners';
import '@wcj/dark-mode';
import ReadmeStr from '@b0r0/lily-text-editor/README.md';
import Example from './Example';
import { ReactComponent as Banner } from './banner.svg';
import './App.less';
import pkg from '../package.json';
import Markdown from './Markdown';

export default function App() {
  const openVersionWebsite = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target && e.target.value) {
      window.location.href = e.target.value;
    }
  };
  return (
    <div className="wmde-markdown-var">
      <dark-mode permanent style={{ position: 'fixed', top: 8, left: 10, zIndex: 10 }}></dark-mode>
      <a
        className="product-hunt"
        href="https://www.producthunt.com/posts/react-markdown-editor?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-react-markdown-editor"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=300765&theme=light"
          alt="react markdown editor - A simple markdown editor with preview, with React | Product Hunt"
          height="38"
        />
      </a>
      <select className="version" onChange={openVersionWebsite}>
        <option value="https://raw.githack.com/uiwjs/lily-text-editor/gh-pages/index.html">v{pkg.version}</option>
        <option value="https://raw.githack.com/uiwjs/lily-text-editor/a7491b9/index.html">v2.1.11</option>
        <option value="https://raw.githack.com/uiwjs/lily-text-editor/bbe10be/index.html">v1.14.7</option>
      </select>
      <div className="warpper">
        <GithubCorner fixed target="__blank" zIndex={99999} href="https://github.com/uiwjs/lily-text-editor" />
        <header className="header">
          <Banner />
        </header>
        <div className="badges">
          <a href="https://www.npmjs.com/package/@b0r0/lily-text-editor" target="__blank">
            <img alt="Downloads" src="https://img.shields.io/npm/dm/@b0r0/lily-text-editor.svg?style=flat" />
          </a>
          <a href="https://www.jsdelivr.com/package/npm/@b0r0/lily-text-editor" target="__blank">
            <img
              alt="jsDelivr CDN"
              src="https://data.jsdelivr.com/v1/package/npm/@b0r0/lily-text-editor/badge?style=rounded"
            />
          </a>
          <a href="https://bundlephobia.com/package/@b0r0/lily-text-editor" target="__blank">
            <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@b0r0/lily-text-editor" />
          </a>
          <a href="https://uiwjs.github.io/lily-text-editor/coverage/lcov-report" target="__blank">
            <img alt="Coverage Status" src="https://uiwjs.github.io/lily-text-editor/coverage/badges.svg" />
          </a>
          <br />
          <a href="https://github.com/uiwjs/lily-text-editor/actions" target="__blank">
            <img
              alt="Build & Deploy"
              src="https://github.com/uiwjs/lily-text-editor/actions/workflows/ci.yml/badge.svg"
            />
          </a>
          <a href="https://gitee.com/uiw/lily-text-editor" target="__blank">
            <img alt="Gitee" src="https://jaywcjlove.github.io/sb/ico/gitee.svg" />
          </a>
          <a href="https://www.npmjs.com/package/@b0r0/lily-text-editor" target="__blank">
            <img alt="npm version" src="https://img.shields.io/npm/v/@b0r0/lily-text-editor.svg" />
          </a>
          <a href="https://uiwjs.github.io/npm-unpkg/#/pkg/@b0r0/lily-text-editor/file/README.md" target="__blank">
            <img src="https://img.shields.io/badge/Open%20in-unpkg-blue" alt="Open in unpkg" />
          </a>
        </div>
        <Example mdStr={ReadmeStr.source} />
        <Markdown />
      </div>
    </div>
  );
}
