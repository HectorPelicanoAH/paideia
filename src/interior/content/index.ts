import type { LanguageCode } from '../../content/index.ts'
import ca from './ca.ts'
import es from './es.ts'
import eu from './eu.ts'
import gl from './gl.ts'

export const interiorContent = { ca, es, eu, gl } satisfies Record<LanguageCode, typeof es>
