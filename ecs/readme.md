# Basic to advance aws ecs service

# AWS_ECS
![alt text](image.png)

## there are three importent topics in ecs

### 1. Cluster
### 2. Service (load balancer)
### 3. Tasks : is the one run our conatiner(step1)



## commands for aws ecs 

### List the cluster
#### aws ecs list-clusters
![alt text](image-1.png)

### Create a new cluster
#### aws ecs create-cluster \
            --cluster-name testing
![alt text](image-2.png)

### Delete the cluster
#### aws ecs delete-cluster -cluster cluser_name
![alt text](image-3.png)


### login to the ecr
#### aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 47472.dkr.ecr.ap-south-1.amazonaws.com