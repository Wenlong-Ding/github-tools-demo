# GitHub 工具使用示例

这个仓库用于演示各种 GitHub API 工具的使用方法。

## 功能列表

- [x] 创建仓库 ✅
- [x] 推送文件 ✅
- [x] 创建 Issue ✅
- [ ] 创建 Pull Request
- [ ] 合并代码

## 使用方法

```bash
git clone https://github.com/Wenlong-Ding/github-tools-demo.git
cd github-tools-demo
```

## 已使用的 GitHub 工具

1. `mcp_github_create_repository` - 创建仓库
2. `mcp_github_create_or_update_file` - 创建/更新文件
3. `mcp_github_push_files` - 批量推送文件
4. `mcp_github_create_issue` - 创建 Issue
5. `mcp_github_create_branch` - 创建分支

## 示例代码

### Java 示例

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, GitHub!");
    }
}
```

### Python 示例

```python
def hello_github():
    print("Hello from Python!")
    
if __name__ == "__main__":
    hello_github()
```
