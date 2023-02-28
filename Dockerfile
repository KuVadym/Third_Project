# start by pulling the python image
FROM python:3.10

# copy the requirements file into the image
COPY ./backend/requirements.txt /backend/requirements.txt

# EXPOSE 3000
# switch working directory
WORKDIR /backend

# install the dependencies and packages in the requirements file
RUN pip install --upgrade pip 
# RUN pip install numpy==1.24.2
RUN pip install -r requirements.txt develop --no-deps

# copy every content from the local file to the image
COPY ./backend /backend
COPY ./backend/utils/model.h5 /backend/model.h5

# set environmetn variables


ENTRYPOINT ["python"]

CMD ["app.py"]