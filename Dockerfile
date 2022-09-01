# 基于 node:16.17.0-alpine 定制镜像
FROM node:16.17.0-alpine as builder

# 为后续命令指定运行的工作目录
WORKDIR /vueApp

# 当前目录所有文件 copy 到工作目录
COPY . .

# 安装 pnpm
RUN npm install pnpm -g

# 切换淘宝镜像
RUN pnpm config set registry https://registry.npmmirror.com

# 由于 node-sass 报错 无法下载 linux_musl-x64-93_binding.node，所以自行下载并完成下面 3步
# 1.创建 node-sass 目录
RUN mkdir -p /vueApp/node-sass
# 2. 将当前目录中的 binding.node 拷贝到镜像的 node-sass 目录中
COPY binding.node /vueApp/node-sass
# 3. node-sass 能通过 SASS_BINARY_PATH 自行配置路径，所以将路径指向创建的目录
ENV SASS_BINARY_PATH /vueApp/node-sass/binding.node

# 安装依赖
RUN pnpm install

# 打包
RUN pnpm build:prod

# 基于 nginx:1.22.0-alpine 定制镜像
FROM nginx:1.22.0-alpine

# 将 node builder 阶段得到的 dist 下的文件拷贝到 nginx/html 中
COPY --from=builder /vueApp/dist /usr/share/nginx/html
