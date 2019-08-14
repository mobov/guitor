import * as Library from './library'
// @ts-ignore
import LibraryBaseUi from '@guitor/base-ui/guitor.library.js'
import LibraryElementUi from "@guitor/library-element-ui"

Library.register(LibraryBaseUi as any)
Library.register(LibraryElementUi as any)
