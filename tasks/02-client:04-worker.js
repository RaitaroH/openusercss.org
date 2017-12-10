import gulp from 'gulp'
import workbox from 'workbox-build'

gulp.task('worker-manifest', async () => {
  return workbox.injectManifest({
    'globDirectory': './build/static',
    'globPatterns':  [
      '**/*.{html,js,css,png,jpg}'
    ],
    'swSrc':  './build/static/worker.js',
    'swDest': './build/static/worker.js'
  })
})
