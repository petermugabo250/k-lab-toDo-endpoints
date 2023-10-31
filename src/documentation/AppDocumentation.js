/**
  @swagger
 * /todoApp/add:
 *   post:
 *     summary: Add Task.
 *     tags: [ToDo App]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               Task:
 *                 type: string
 *               Duration:
 *                 type: string
 *               
 *     responses:
 *       200:
 *         description: Task Added Successful.
 *       500:
 *         description: Add task Failed.
 * /todoApp/viewAll:
 *   get:
 *     summary: View All Tasks Added.
 *     tags: [ToDo App]
 *     responses:
 *       200:
 *         description: Successfully retrieved tasks.
 *       500:
 *         description: Failed to retrieve tasks.
 * /todoApp/viewOne/{id}:
 *   get:
 *     summary: Get a single Task.
  *     tags: [ToDo App]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Display a single task.
 *     responses:
 *       200:
 *         description: Successfully retrieved a task.
 *       404:
 *         description: Task not found with the provided id.
 *       500:
 *         description: Failed to retrieve task.
 * /todoApp/update/{id}:
 *   put:
 *     summary: Update Task.
 *     tags: [ToDo App]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the task to update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 category: string
 *               
 *     responses:
 *       200:
 *         description: Task information updated successfully.
 *       404:
 *         description: Task not found with the provided ID.
 *       500:
*         description: Failed to update Task.
/todoApp/delete/{id}:
 *   delete:
 *     summary: Delete a Task by id.
 *     tags: [ToDo App]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Delete task according to the id.
 *     responses:
 *       200:
 *         description: Pask information deleted successfully.
 *       404:
 *         description: Task not found with the provided ID.
 *       500:
 *         description: Failed to delete Task.

 * /client/register:
 *   post:
 *     summary: Create client account.
 *     tags: [E-Commerce]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               gender:
 *                 type: string
 *               age:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary             
 *     responses:
 *       200:
 *         description: Client registered Successful.
 *       500:
 *         description:  Failed to register.
 * /client/login:
 *   post:
 *     summary:  Login into The system.
 *     tags: [E-Commerce]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Client Logged in successfully.
 *       500:
 *         description: Login  failed.
 * /client/viewClients:
 *   get:
 *     summary: Get a list of all registered Clients.
 *     tags: [E-Commerce]
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of all Clients.
 *       500:
 *         description: Failed to retrieve Clients data.
 * /client/update/{id}:
 *   put:
 *     summary: Update a Client's information by their ID.
 *     tags: [E-Commerce]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the Client to update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 * 
 *               profile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: User information updated successfully.
 *       404:
 *         description: User not found with the provided ID.
 *       500:
 *         description: Failed to update user data.
   /products/create:
 *   post:
 *     summary: Create client account.
 *     tags: [E-Commerce]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *               type:
 *                 type: string
 *               price:
 *                 type: string
 *               password:
 *                 type: string
 *               quantity:
 *                 type: string
 *               age:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary             
 *     responses:
 *       200:
 *         description: Client registered Successful.
 *       500:
 *         description:  Failed to register.
 * 
 */