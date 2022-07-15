"use strict";

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "jun" && password === "seony") ||
        (id === "seony" && password === "jun")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 1000);
  }
}

