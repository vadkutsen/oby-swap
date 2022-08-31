import { Currency, OBX, Token } from 'obiswap'

export function currencyId(currency: Currency): string {
  if (currency === OBX) return 'ETH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
