import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                wishes: resolve(__dirname, 'src/wishes.html'),
            },
        },
    },
    base: '/natalia-happy-bd/',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    plugins: [
        ViteEjsPlugin(),
        viteStaticCopy({
            targets: [
                { src: 'assets/img/*.*', dest: '../dist/assets/img/' },
                { src: 'assets/img/me/*.*', dest: '../dist/assets/img/me/' },
                { src: 'assets/img/other/*.*', dest: '../dist/assets/img/other/' },
                { src: 'assets/plugins/particles/*.*', dest: '../dist/assets/plugins/particles/' }
            ]
        })
    ]
});
