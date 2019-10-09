# test-push
First time to test push to Github
## 遇到的问题
1. Git Shell无法到指定文件夹进行克隆

   在Github就可以克隆github上的项目到本地;然后再在Github该项目里打开Git Shell就可以
  
2. 上传的步骤

   一定要先git pull(把github修改过的同步到本地)
   
   再git add * (添加所有没有gitignore的文件到本地缓存区)
   
   然后使用git status(查看要上传的文件时候正确)
   
   再然后一定要git commit -m "" (添加注释说明)
   
   最后git push到github上
