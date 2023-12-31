import eel
import skt
import fnirs
import time

eel.init('web')
root = fnirs.Fnirs()

@eel.expose
def start():
    while True:
        if root.line:
            if root.line[0] == '-1':
                break
            elif len(root.line)-2 == root.size:
                root.get_avg()
                eel.update_values(root.new, root.change)
            time.sleep(0.5)
        root.next_line()

eel.start('index.html', port=80, host='10.143.200.62')
