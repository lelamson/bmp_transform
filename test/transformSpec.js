'use strict';
var expect = require('chai').expect;
var transform = require('../transform');

describe('transforms bmp files', function(){

  it('should read the file header correctly', function() {
    expect(transform.readBmp('./bitmap1.bmp').header).to.eql('424d');
    // expect(transform.readBmp('./bitmap1.bmp').fileSize).to.eql('11078');
    // expect(transform.readBmp('./bitmap1.bmp').width).to.eql('100');
    // expect(transform.readBmp('./bitmap1.bmp').height).to.eql('100');
  });


});
