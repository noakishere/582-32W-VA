# Workflow

Browser loads HTML from Flask (template)

↓

Javascript calls (endpoint)

↓

Flask queries the database

↓

Flask returns JSON

↓

Javascript renders the list

Frontend responsibilities:

- interface
- events
- loading states
- displaying validation errors, feedbacks, etc.
- rendering returned data

Backend responsibilities:

- validation
- database operations
- authentication
- authorization
- JSON responses

---

#### Relationship:

Browser --> Flask --> Database

---

### HTTP Status codes:

- 200 -- Successful request
- 201 -- Resource created
- 400 -- Invalid client input
- 401 -- client side erorr, input cant be processed (related to creation)
