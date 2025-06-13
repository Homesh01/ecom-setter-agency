from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from dotenv import load_dotenv
import logging
import json
import os
from openai import OpenAI

# Configure logging
logging.basicConfig(
    level=logging.INFO,  # Set the logging level (DEBUG, INFO, WARNING, ERROR, CRITICAL)
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",  # Log message format
    datefmt="%Y-%m-%d %H:%M:%S",  # Date format for log entries
)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)  # Enable CORS


load_dotenv()  # Load environment variables from .env file
client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])


def generate_streaming_response(data):
    for message in data:
        json_data = message.model_dump_json()
        # logger.info(f"JSON data: {json.dumps(json_data, indent=2)}")
        yield f"data: {json_data}\n\n"


@app.route("/chat/completions", methods=["POST"])
def chat_completions():
    print("In chat completions function")
    data = request.get_json()

    messages = data.get("messages", [])
    chat_completion_stream = client.chat.completions.create(
        model="gpt-4.1",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant for a dental clinic",
            },
            *messages,
        ],
        stream=True,
    )
    response = generate_streaming_response(chat_completion_stream)
    return Response(response, content_type="text/event-stream")


@app.route("/")
def index():
    return "Hello World!"


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=6000)  # You can adjust the port if needed
