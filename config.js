import 'dotenv/config'

const config = {
  bot_token: process.env.bot_token,
  app_id: process.env.app_id,
  public_key: process.env.public_key,
  candidates_url: 'https://api.metaspan.io/api/polkadot/candidate',
  nominators_url: 'https://polkadot.w3f.community/nominators',
  update_interval: 15 * 1000
}

export default config
