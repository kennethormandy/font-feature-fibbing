describe('supports `font-feature-settings`', function(){
  describe('basic', function(){
    it('should exist', function(){
      chai.assert.typeOf(fontFeatureAffecting, 'function', 'fontFeatureAffecting is a function');
    })
    // it('should return true in Chrome', function(){
    //   chai.assert(supportsFontFeatureSettings(), true);
    // })
  })
})
