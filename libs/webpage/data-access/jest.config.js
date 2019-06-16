module.exports = {
  name: 'webpage-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/webpage/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
