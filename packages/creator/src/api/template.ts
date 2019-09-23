import { Option } from '@/typings/template'
import Http from '@/api/index'
import { deepCopy } from '@mobov/es-helper'

// export function setTemplate (data: any = {}): Promise<Option> {
//   // return Http({
//   //   url: Interface.GuiCreator.template,
//   //   method: 'POST',
//   //   data: {
//   //     status: 1,
//   //     ...data
//   //   }
//   // }).then(res => res.data)
// }
//
// export function getTemplate (): Promise<Array<Option>> {
//   // return Http({
//   //   url: Interface.GuiCreator.template,
//   //   method: 'GET',
//   //   params: {
//   //     status: 1
//   //   }
//   // }).then(res => res.data ? res.data : [])
// }
//
// export function updateTemplate (data: { _id: string, [field: string]: any }): Promise<boolean> {
//   // const postData = deepCopy(data)
//   // delete postData._id
//   // return Http({
//   //   url: `${Interface.GuiCreator.template}${data._id}`,
//   //   data: postData,
//   //   method: 'PATCH'
//   // }).then((res: any) => res.status_code === 0)
// }

export function getRemoteData () {
  return HTMLElement
}
