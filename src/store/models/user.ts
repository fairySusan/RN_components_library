import { Dispatch } from '../index';

export const user: any = {
  state: {},
  reducers: {
    setState: (state: any, payload: any) => payload,
  },
  effects: (dispatch: Dispatch) => ({
    async doLogin() {
      
    }
  })
}