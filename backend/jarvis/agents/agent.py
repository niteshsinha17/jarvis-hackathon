from jarvis.constants import OPEN_API_KEY
from langchain import OpenAI

llm = OpenAI(temperature=0.2, model_name="gpt-3.5-turbo", openai_api_key=OPEN_API_KEY)


class Agent:

    @classmethod
    def combine_messages(cls, messages):
        msg = ""
        for m in messages:
            msg += f'{m["role"]}: {m["message"]}\n'
        return msg

    @classmethod
    def get_llm_response(cls, prompt):
        return llm(prompt)

    def generate_response(self, messages):
        raise NotImplementedError("generate_response() not implemented")
