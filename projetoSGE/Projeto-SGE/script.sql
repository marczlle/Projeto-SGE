use sge_js;

select c.cliente_nome, p.pedido_id, prod.produto_nome, dt_valor
from clientes c
inner join pedidos p
on c.cliente_id = p.cliente_id
inner join detalhepedidos dt
on p.pedido_id = dt.dt_pedido_id
inner join produtos prod
on prod.produto_id = dt.dt_produto_id;

select * from pedidos;