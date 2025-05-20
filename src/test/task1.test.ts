import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Task 1: Project Environment Setup', () => {
  // Test project structure
  describe('Project Structure', () => {
    it('has the correct directory structure', () => {
      const directories = [
        'src/components',
        'src/assets',
        'src/lib'
      ];
      
      directories.forEach(dir => {
        const fullPath = path.resolve(process.cwd(), dir);
        expect(fs.existsSync(fullPath)).toBe(true);
      });
    });
    
    it('has essential configuration files', () => {
      const configFiles = [
        'package.json',
        'tsconfig.json',
        'vite.config.ts',
        'components.json',
        'eslint.config.js'
      ];
      
      // Check all configs exist
      configFiles.forEach(file => {
        const fullPath = path.resolve(process.cwd(), file);
        expect(fs.existsSync(fullPath)).toBe(true);
      });
    });
  });
  
  // Test dependency installation
  describe('Dependencies', () => {
    let packageJson: any;
    
    beforeEach(() => {
      packageJson = JSON.parse(
        fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf8')
      );
    });
    
    it('has React installed', () => {
      expect(packageJson.dependencies.react).toBeDefined();
      expect(packageJson.dependencies['react-dom']).toBeDefined();
    });
    
    it('has TypeScript installed', () => {
      expect(packageJson.devDependencies.typescript).toBeDefined();
    });
    
    it('has TailwindCSS installed', () => {
      expect(packageJson.dependencies.tailwindcss).toBeDefined();
    });
    
    it('has Shadcn UI dependencies', () => {
      const shadcnDeps = [
        'class-variance-authority',
        'clsx',
        'tailwind-merge'
      ];
      
      shadcnDeps.forEach(dep => {
        expect(packageJson.dependencies[dep]).toBeDefined();
      });
    });
    
    it('has ESLint installed', () => {
      expect(packageJson.devDependencies.eslint).toBeDefined();
    });
  });

  // Test script availability
  describe('Scripts', () => {
    let packageJson: any;
    
    beforeEach(() => {
      packageJson = JSON.parse(
        fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf8')
      );
    });
    
    it('has dev script', () => {
      expect(packageJson.scripts.dev).toBeDefined();
    });
    
    it('has build script', () => {
      expect(packageJson.scripts.build).toBeDefined();
    });
    
    it('has lint script', () => {
      expect(packageJson.scripts.lint).toBeDefined();
    });
  });
});
