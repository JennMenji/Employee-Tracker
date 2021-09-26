INSERT INTO departments (name)
VALUES 
    ('Sales'),
    ('Finance'),
    ('Security'),
    ('Human Resources'),
    ('IT'),

INSERT INTO roles (title, salary, department_id)
VALUES 
    ('Manager', 90000, 1),
    ('Accountant', 80000, 2),
    ('Officer', 78000, 3),
    ('Administrator', 65000, 1),
    ('Supervisor', 75000.0, 4),
    ('Technician', 85000.0, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('James', 'Corben', 2, NULL),
    ('Jack', 'London', 4, 1),
    ('Derek', 'Peets', 6, NULL),
    ('Carline', 'Joseph', 1, NULL),
    ('Dennis', 'Cooper', 3, NULL),
    ('Monica', 'Bellucci', 5, NULL),
    ('Samuel', 'Johnson', 1, NULL),
    ('Tulse', 'Luper', 4, NULL),
    ('Charles', 'Brown', 2, NULL),
    ('Eliza', 'Parsons', 6, NULL),
    ('Susan', 'Hill', 2, 1),
    ('Sydney', 'Owenson', 3, 1),
    ('Hubert', 'Crackanthorpe', 3, NULL),
    ('William', 'Carleton', 5, 1),
    ('Gerald', 'Griffin', 4, NULL);