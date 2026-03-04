package com.example.demo;

/**
 * GitHub 工具演示类
 * 
 * @author Demo
 * @version 1.0
 */
public class GitHubToolDemo {
    
    private String repositoryName;
    private String branch;
    
    /**
     * 构造函数
     * @param repositoryName 仓库名称
     * @param branch 分支名称
     */
    public GitHubToolDemo(String repositoryName, String branch) {
        this.repositoryName = repositoryName;
        this.branch = branch;
    }
    
    /**
     * 获取仓库信息
     * @return 仓库信息字符串
     */
    public String getRepositoryInfo() {
        return "Repository: " + repositoryName + ", Branch: " + branch;
    }
    
    /**
     * 主方法
     * @param args 命令行参数
     */
    public static void main(String[] args) {
        GitHubToolDemo demo = new GitHubToolDemo("github-tools-demo", "main");
        System.out.println(demo.getRepositoryInfo());
        System.out.println("GitHub 工具演示成功！");
    }
}
