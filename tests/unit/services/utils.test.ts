
import { vi, describe, it, expect } from 'vitest'
import { getVersion } from '@/services/utils'

describe('utils service', () => {
    it('returns the correct version', () => {
      const mockVersion = '1.0.0'
      // Mock import.meta.env.VERSION
      vi.mock('import.meta.env', () => ({
        VERSION: mockVersion,
      }))
  
      const version = getVersion()
  
      expect(version).toEqual(mockVersion)
    })
  })