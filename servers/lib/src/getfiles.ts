import glob from 'glob';

// const getDirectories = function (src, back) {
//  glob(`${src}`, back);
// };
// getDirectories('*.ts', (err, res) => {
//  if (err) {
//    console.log('Error', err);
//  } else {
//    console.log(res);
//  }
// });

// Get all files in directory

glob("src/*", (err, res) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log(res);
  }
});
