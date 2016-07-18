var gulp = require('gulp');

gulp.task('rice',function(callback){
   setTimeout(function(){
      console.log('米饭OK');
      callback();
   },1000);
});
gulp.task('egg',function(callback){
   setTimeout(function(){
      console.log('鸡蛋OK');
      callback();
   },1000);
});
gulp.task('cook',['rice','egg'],function(){
   console.log('炒鸡蛋+米饭');
});
gulp.task('eat',['cook'],function(){
   console.log('吃饭');
});