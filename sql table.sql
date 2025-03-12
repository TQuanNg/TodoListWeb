CREATE TABLE tasks (
    task_id          integer NOT NULL DEFAULT nextval('tasks_task_id_seq'::regclass),
    title            character varying(255) NOT NULL,
    description      text,
    is_completed     boolean DEFAULT false,
    due_date         date,
    priority         integer,
    created_at       timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at       timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    day              character varying(10),
    CONSTRAINT tasks_pkey PRIMARY KEY (task_id)
);