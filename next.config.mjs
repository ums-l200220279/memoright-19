import fs from 'fs';
import path from 'path';

// Path ke file konfigurasi baru
const userConfigPath = path.resolve('./app-config.mjs');

let userConfig = {};

if (fs.existsSync(userConfigPath)) {
  try {
    // Mengimpor konfigurasi dari app-config.mjs secara dinamis
    userConfig = await import(userConfigPath).then((mod) => mod.default);
    console.log('✅ Loaded app-config.mjs');
  } catch (error) {
    console.warn('⚠️ Error loading app-config.mjs:', error);
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  experimental: { serverActions: {} },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

// Gabungkan konfigurasi utama dengan konfigurasi dari app-config.mjs
const mergeConfig = (baseConfig, additionalConfig) => {
  for (const key in additionalConfig) {
    if (typeof baseConfig[key] === 'object' && !Array.isArray(baseConfig[key])) {
      baseConfig[key] = { ...baseConfig[key], ...additionalConfig[key] };
    } else {
      baseConfig[key] = additionalConfig[key];
    }
  }
};

mergeConfig(nextConfig, userConfig);

export default nextConfig;
