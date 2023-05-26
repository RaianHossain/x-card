import storage from "../../utils/storage";

export const Init = () => {
  return async dispatch => {
    //----------------------------------------------------------------
    storage
      .load({
        key: 'loginState',

        // autoSync (default: true) means if data is not found or has expired,
        // then invoke the corresponding sync method
        autoSync: true,

        // syncInBackground (default: true) means if data expired,
        // return the outdated data first while invoking the sync method.
        // If syncInBackground is set to false, and there is expired data,
        // it will wait for the new data and return only after the sync completed.
        // (This, of course, is slower)
        syncInBackground: true,

        // you can pass extra params to the sync method
        // see sync example below
        syncParams: {
          extraFetchOptions: {
            // blahblah
          },
          someFlag: true
        }
      })
      .then(ret => {
        // found data go to then()
        // console.log(ret.userid);
        dispatch({
          type: 'LOGIN',
          payload: ret,
        })
      })
      .catch(err => {
        // any exception including data not found
        // goes to catch()
        console.warn(err.message);
        switch (err.name) {
          case 'NotFoundError':
            // TODO;
            break;
          case 'ExpiredError':
            // TODO
            break;
        }
      });
    //----------------------------------------------------------------
    // let userInfo = await AsyncStorage.getItem('token');
    // if (userInfo && userInfo.token !== null) {
    //   console.log('token fetched');
    //   dispatch({
    //     type: 'LOGIN',
    //     payload: userInfo,
    //   })
    // }
  }
}

export const Login = (userInfo) => {
  return async dispatch => {
    if (true) {
      // await AsyncStorage.setItem('token', userInfo.token);
      storage.save({
        key: 'loginState', // Note: Do not use underscore("_") in key!
        data: {
          token: userInfo.token,
          userEmail: userInfo.userEmail,
        },
      
        // if expires not specified, the defaultExpires will be applied instead.
        // if set to null, then it will never expire.
        expires: 1000 * 3600
      });
      console.log(userInfo);
    }
    dispatch({
      type: 'LOGIN',
      payload: userInfo,
    })
  }
}



export const Logout = () => {
  return async dispatch => {
    // await AsyncStorage.clear();
    await storage.remove({
      key: 'loginState'
    });
    dispatch({
      type: 'LOGOUT'
    })
  }
}