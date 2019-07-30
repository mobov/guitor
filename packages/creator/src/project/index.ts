/**
 * Created by nocoolyoyo on 2019/3/19.
 */
import JSZip from 'jszip'
import { merge, cloneDeep } from 'lodash'
import { saveAs } from 'file-saver'

export async function exportProject (project: any) {

}

export async function importProject (file: any): Promise<any> {

}

export async function getTemplateProject () {
  return {
    name: '项目名',
    dependencies: {},
    UiNodes: {

    }
  }
}
