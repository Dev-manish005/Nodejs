CREATE TABLE IF NOT EXISTS users (

	id SERIAL PRIMARY KEY,

	user_name varchar(255) NOT NULL,
	mobile varchar(20),
	email varchar(255),
	role varchar(255),
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

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);

CREATE TABLE IF NOT EXISTS branches (
    id SERIAL PRIMARY KEY,
    branch_name VARCHAR(100) NOT NULL,

	is_obsolete INTEGER DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(255),
	updated_by varchar(255)
);