#base image
FROM nginx:1.25-alpine 

#Remove default files
RUN rm -rf /usr/share/nginx/html/*

# Copy files
COPY index.html /usr/share/nginx/html/   


#Expose port
EXPOSE 80  #Expose port

#Cmd
CMD ["nginx", "-g", "daemon off;"]
