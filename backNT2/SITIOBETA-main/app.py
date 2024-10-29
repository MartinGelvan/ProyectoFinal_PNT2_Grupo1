
from flask import Flask, jsonify, redirect
from flask import render_template, request

from flaskext.mysql import MySQL

app = Flask(__name__)


app.secret_key = "1234"
mysql = MySQL()


app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'vuelosapp'
mysql.init_app(app)


@app.route('/')
def inicio():

    return render_template('sitio/index.html')


@ app.route('/usuarios' , methods=['GET'])
def usuarios():
    conexion = mysql.connect()
    cursor = conexion.cursor()
    cursor.execute(
        "SELECT * FROM `usuarios`;")
    usuarios = cursor.fetchall()
    conexion.commit()

    return jsonify(usuarios)

@app.route('/usuarios', methods=['POST'])
def agregar_usuario():
    data = request.get_json()
    usuario = data.get('usuario')
    contrasenia = data.get('contrasenia')

    # Validación básica de datos
    if not usuario or not contrasenia:
        return jsonify({"error": "El usuario y la contraseña son obligatorios"}), 400

    try:
        # Conexión a la base de datos
        connection = mysql.connect()
        cursor = connection.cursor()

        # Insertar el nuevo usuario en la base de datos
        query = "INSERT INTO usuarios (usuario, contrasenia) VALUES (%s, %s)"
        cursor.execute(query, (usuario, contrasenia))
        connection.commit()

        # Obtener el id del nuevo usuario insertado
        id_usuario = cursor.lastrowid

        return jsonify({"id_usuario": id_usuario, "usuario": usuario}), 201

    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return jsonify({"error": "Error al conectar con la base de datos"}), 500

    finally:
        # Cerrar la conexión
        if connection.is_connected():
            cursor.close()
            connection.close()
"""
@app.route('/admin/ofertas/borrar', methods=['POST'])
def admin_ofertas_borrar():
    _id = request.form['txtID']

    conexion = mysql.connect()
    cursor = conexion.cursor()
    cursor.execute("DELETE FROM ofertas where id_o=%s;", (_id))
    pedido = cursor.fetchall()
    conexion.commit()
    return redirect('/admin/ofertas')

@ app.route('/admin/editarOfertas/<int:id>')
def admin_ofertas_update(id):
    conexion = mysql.connect()
    cursor = conexion.cursor()
    cursor.execute(
        "SELECT * FROM `ofertas` WHERE id_o=%s;", (id))
    ofertas = cursor.fetchall()
    conexion.commit()

    return render_template('admin/editarOferta.html', ofertas=ofertas)
"""
def pagina_no_encontrada(error):
    return "<h2>La página no existe.</h2>", 404


if __name__ == '__main__':
    app.register_error_handler(404, pagina_no_encontrada)
    app.run(host="192.168.1.39", port=8000, debug=True)
# host="192.168.0.117", port=8000,

