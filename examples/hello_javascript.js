// JavaScript 示例代码
// GitHub 工具演示 - JavaScript 版本

/**
 * GitHub 工具演示类
 */
class GitHubToolDemo {
    /**
     * 构造函数
     * @param {string} repositoryName - 仓库名称
     * @param {string} branch - 分支名称
     */
    constructor(repositoryName, branch) {
        this.repositoryName = repositoryName;
        this.branch = branch;
    }
    
    /**
     * 获取仓库信息
     * @returns {string} 仓库信息
     */
    getRepositoryInfo() {
        return `Repository: ${this.repositoryName}, Branch: ${this.branch}`;
    }
    
    /**
     * 打印欢迎信息
     */
    printWelcome() {
        console.log('='.repeat(50));
        console.log('Hello from JavaScript!');
        console.log('GitHub API 工具使用示例');
        console.log('='.repeat(50));
    }
}

// 主程序入口
const demo = new GitHubToolDemo('github-tools-demo', 'main');
demo.printWelcome();
console.log(demo.getRepositoryInfo());
console.log('GitHub 工具演示成功！');
