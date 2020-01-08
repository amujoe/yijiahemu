<!--
 * @Author: amujoe
 * @Date: 2020-01-06 16:35:38
 * @Description: file content
 -->
####
```
npm install
npm run serve
```

#### deploy
```
npm run build
git checkout -b gh-pages
git add -f dist
git commit -m 'deploy dist'
git subtree push --prefix dist origin gh-pages

```
