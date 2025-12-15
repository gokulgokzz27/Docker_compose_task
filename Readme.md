## Sample Three Tier Application

### Architecture
- Frontend: HTML served by Nginx
- Backend: Node.js (Express)
- Database: MongoDB

### How to Run
```bash
docker-compose up --build


---

### ☁️ If the recruiter is running this project on a Linux VM

If the project is running inside a **Linux Virtual Machine (Azure / cloud VM)**, then **localhost will NOT work**.

In this case, replace `localhost` with the **public IP address of the VM**.

Example:
http://<VM_PUBLIC_IP>:3000
http://<VM_PUBLIC_IP>:5000/health


📌 **Note:**  
The VM must allow inbound traffic on ports **3000** and **5000** in the Network Security Group (NSG).

---

### 🗄️ Database Access

MongoDB runs as an **internal Docker service only** and is not accessible via browser or public IP.

