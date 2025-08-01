module.exports = {
  plugins: [
    require('postcss-rtlcss')({
      ltrPrefix: ':where([dir="ltr"])',
      rtlPrefix: ':where([dir="rtl"])',
      bothPrefix: ':where([dir])',
      safelist: []
    })
  ]
}