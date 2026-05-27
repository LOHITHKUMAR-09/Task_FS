# from motor.motor asyncio import AsyncIOMotorClient
# MONGO URL = "mongodb://localhost:27017"
# client=AsyncIOMotorClient(MONGO_URL)

from pymongo import MongoClient

MONGO_URL = "mongodb://localhost:27017"

client = MongoClient(MONGO_URL)

db=client["overall"]
msgs=db["msg"];