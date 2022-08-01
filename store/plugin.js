export const createLocalStoragePlugin = ({ paths }) => {
  return (store) => {
    console.log("store", store)
    for (let mutaion in store._mutations) {
      const found = paths.find((i) => i.type == mutaion);
      if (found) {
        store.commit(found.type, {
          [found.path]: uni.getStorageSync(found.path),
        });
      }
    }
    store.subscribe((mutaion, state) => {
      console.log("mutation = ", mutaion, "state = ", state)
      for (let key in state) {
        if (paths.find((i) => i.path == key)) {
          uni.setStorageSync(key, state[key]);
        }
      }
    });
  };
};
