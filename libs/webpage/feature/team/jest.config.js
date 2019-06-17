module.exports = {
  name: 'webpage-feature-team',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/webpage/feature/team',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
