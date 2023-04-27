/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    apiVagas: 'https://estagio.universidadepatativa.com.br/api/v1/vagas'
  }
}

module.exports = nextConfig
