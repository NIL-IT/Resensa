import uvicorn
#app
if __name__ == "__main__":
    uvicorn.run("server.app:server", host="0.0.0.0", port=8082, reload=True)