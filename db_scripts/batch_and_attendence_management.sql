CREATE TABLE IF NOT EXISTS users (

	id SERIAL PRIMARY KEY,

	user_name varchar(255) NOT NULL,
	mobile varchar(20) NOT NULL,
	email varchar(255),
	role varchar(255), -- admin, manager, faculty, student
	password varchar(1024),
	otp_value varchar(255) DEFAULT NULL,
	otp_expiry TIMESTAMP DEFAULT NULL,

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);


CREATE TABLE IF NOT EXISTS documents (

	id SERIAL PRIMARY KEY,

	original_file_name varchar(1024),
	file_name varchar(255),
	file_path varchar(2048),
	file_type varchar(255) DEFAULT NULL, -- aadhaar, pan, profile_pic, etc
	file_size varchar(255) DEFAULT 0,
	document_no varchar(255) DEFAULT NULL,

	misc json DEFAULT '{}',

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);

CREATE TABLE IF NOT EXISTS branch (

	id SERIAL PRIMARY KEY,

	name varchar(255) NOT NULL,
	location varchar(255) NOT NULL,
	landmark varchar(255) DEFAULT NULL,
	remarks varchar(255) DEFAULT NULL,

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);


CREATE TABLE IF NOT EXISTS courses (

	id SERIAL PRIMARY KEY,

	name varchar(255) NOT NULL,
	description TEXT DEFAULT NULL,

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);

CREATE TABLE IF NOT EXISTS manager (

	id SERIAL PRIMARY KEY,

	name varchar(255) NOT NULL,
	mobile varchar(20) NOT NULL,
	email varchar(255) DEFAULT NULL,

	remarks varchar(255) DEFAULT NULL,

	user_id INTEGER,
	FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL,

	branch_id INTEGER,
	FOREIGN KEY(branch_id) REFERENCES branch(id) ON DELETE SET NULL,

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);


CREATE TABLE IF NOT EXISTS faculties (

	id SERIAL PRIMARY KEY,

	name varchar(255) NOT NULL,
	mobile varchar(20) NOT NULL,

	availability_of_days JSON DEFAULT '[]', -- ['Monday', 'Tuesday', ...]
	availability_of_time_range JSON DEFAULT '[]', -- [{start: '09:00', end: '17:00'}, {...}]
	remarks varchar(255) DEFAULT NULL,

	user_id INTEGER,
	FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL,

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);

CREATE TABLE IF NOT EXISTS "batches" (

	id SERIAL PRIMARY KEY,

	name varchar(255) NOT NULL,
	description TEXT DEFAULT NULL,
	batch_category varchar(255) DEFAULT NULL, -- weekdays, weekend, daily
	batch_status varchar(255) DEFAULT NULL, -- upcoming, ongoing, completed
	batch_mode varchar(255) DEFAULT NULL, -- online, offline, hybrid
	batch_time varchar(255) DEFAULT NULL,
	start_date date DEFAULT NULL,
	end_date date DEFAULT NULL,
	mongo_doc_id varchar(255) NOT NULL,

	course_id INTEGER,
	FOREIGN KEY(course_id) REFERENCES courses(id) ON DELETE SET NULL,

	manager_id INTEGER,
	FOREIGN KEY(manager_id) REFERENCES manager(id) ON DELETE SET NULL,

	faculty_id INTEGER,
	FOREIGN KEY(faculty_id) REFERENCES faculties(id) ON DELETE SET NULL,

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);

CREATE TABLE IF NOT EXISTS students (

	id SERIAL PRIMARY KEY,

	name varchar(255) NOT NULL,
	mobile varchar(20) NOT NULL,
	mobile_2 varchar(20) DEFAULT NULL,
	email varchar(255) DEFAULT NULL,

	remarks varchar(255) DEFAULT NULL,

	user_id INTEGER,
	FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL,

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);