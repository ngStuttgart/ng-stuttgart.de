module.exports = {
  name: 'webpage-feature-home',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/webpage/feature/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
