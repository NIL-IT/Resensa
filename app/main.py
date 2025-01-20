import uvicorn
#app
if __name__ == "__main__":
    uvicorn.run("server.app:server", host="localhost", port=8083, reload=True)