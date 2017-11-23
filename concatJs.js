// const fs = require('fs');
// const path = require('path');

// const baseDir = __dirname;
// const jsPath = path.resolve(baseDir, 'output', 'js-modules');

// fs.readdir(jsPath, function(err, files) {  
//   if (err) {  
//       throw err;  
//   }  
//   // files是一个数组  
//   // 每个元素是此目录下的文件或文件夹的名称 
//   files.forEach(function(file){
//     if(file == 'UNBUNDLE'){
//       console.log('UNBUNDLE-------');
//       return;
//     }
//     if(file == '13.js'){
//       fs.readFile(path.join(jsPath, file), {encoding:'utf-8'}, function(err, bytesRead){
//         fs.appendFile(path.join(jsPath, '12.js'), `\n ${bytesRead}`, function(errs, code){
//           console.log('code', code);
//         })
//       })
//     }
//     // fs.readFile(path.join(jsPath, file), {encoding:'utf-8'}, function(err, bytesRead){
//     //   fs.appendFile(path.join(jsPath, 'base.js'), `\n ${bytesRead}`, function(errs, code){
//     //     console.log('code', code);
//     //   })
//     // })
//   })
// }); 