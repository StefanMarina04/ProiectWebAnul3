import { useState, useMemo } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { Row, Col, Card, Badge, Button, Form, InputGroup, Offcanvas, ListGroup } from 'react-bootstrap';
import StandardMenuLayout from '@/Layouts/StandardMenuLayout';

function useCart() {
    const [items, setItems] = useState(() => {
        try {
            return JSON.parse(sessionStorage.getItem('cart') || '[]');
        } catch { return []; }
    });

    const save = (next) => {
        setItems(next);
        sessionStorage.setItem('cart', JSON.stringify(next));
    };

    const add = (product) => {
        const existing = items.find(i => i.id === product.id);
        if (existing) {
            save(items.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
        } else {
            save([...items, { ...product, qty: 1 }]);
        }
    };

    const remove = (id) => save(items.filter(i => i.id !== id));

    const updateQty = (id, qty) => {
        if (qty < 1) { remove(id); return; }
        save(items.map(i => i.id === id ? { ...i, qty } : i));
    };

    const clear = () => save([]);

    const total = items.reduce((sum, i) => sum + Number(i.price ?? 0) * i.qty, 0);
    const count = items.reduce((sum, i) => sum + i.qty, 0);

    return { items, add, remove, updateQty, clear, total, count };
}

function CartDrawer({ show, onHide, cart, t }) {
    return (
        <Offcanvas show={show} onHide={onHide} placement="end"
            style={{ backgroundColor: 'var(--interwar-paper)', borderLeft: '2px solid var(--interwar-gold)', maxWidth: 400 }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ fontFamily: 'var(--font-title)' }}>
                    {t('Your Cart')} {cart.count > 0 && <Badge bg="secondary">{cart.count}</Badge>}
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column">
                {cart.items.length === 0 ? (
                    <p className="text-muted text-center mt-4">{t('Your cart is empty.')}</p>
                ) : (
                    <>
                        <ListGroup variant="flush" className="flex-grow-1 overflow-auto">
                            {cart.items.map(item => (
                                <ListGroup.Item key={item.id} className="px-0"
                                    style={{ backgroundColor: 'transparent', borderColor: 'var(--interwar-gold)' }}>
                                    <div className="d-flex gap-2 align-items-start">
                                        {item.image_url && (
                                            <img src={item.image_url} alt={item.title}
                                                style={{ width: 52, height: 52, objectFit: 'cover', borderRadius: 4, flexShrink: 0 }} />
                                        )}
                                        <div className="flex-grow-1 min-w-0">
                                            <div className="fw-semibold text-truncate small">{item.title}</div>
                                            <div className="text-muted small">
                                                {Number(item.price).toFixed(2)} RON × {item.qty}
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mt-1">
                                                <Button size="sm" variant="outline-secondary" style={{ width: 24, height: 24, padding: 0, lineHeight: 1 }}
                                                    onClick={() => cart.updateQty(item.id, item.qty - 1)}>−</Button>
                                                <span className="small">{item.qty}</span>
                                                <Button size="sm" variant="outline-secondary" style={{ width: 24, height: 24, padding: 0, lineHeight: 1 }}
                                                    onClick={() => cart.updateQty(item.id, item.qty + 1)}>+</Button>
                                            </div>
                                        </div>
                                        <div className="text-end" style={{ flexShrink: 0 }}>
                                            <div className="small fw-bold">
                                                {(Number(item.price) * item.qty).toFixed(2)} RON
                                            </div>
                                            <Button size="sm" variant="link" className="text-danger p-0 mt-1"
                                                onClick={() => cart.remove(item.id)}>✕</Button>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>

                        <div className="border-top pt-3 mt-2" style={{ borderColor: 'var(--interwar-gold) !important' }}>
                            <div className="d-flex justify-content-between fw-bold mb-3">
                                <span>{t('Total')}</span>
                                <span>{cart.total.toFixed(2)} RON</span>
                            </div>
                            <Button className="w-100 mb-2"
                                style={{ backgroundColor: 'var(--interwar-ink)', border: 'none', fontFamily: 'var(--font-title)', letterSpacing: '0.05em' }}>
                                {t('Proceed to Checkout')}
                            </Button>
                            <Button variant="link" size="sm" className="w-100 text-muted"
                                onClick={cart.clear}>
                                {t('Clear cart')}
                            </Button>
                        </div>
                    </>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

function ProductCard({ product, onAdd, t }) {
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        onAdd(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <Card className="h-100 shadow-sm"
            style={{ backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)', transition: 'box-shadow .2s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 18px rgba(201,166,107,0.35)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = ''}>

            <Link href={`/shop/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ height: 200, overflow: 'hidden', borderBottom: '1px solid var(--interwar-gold)' }}>
                    {product.image_url ? (
                        <img src={product.image_url} alt={product.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <div className="d-flex align-items-center justify-content-center h-100"
                            style={{ backgroundColor: '#f5e8d0', color: 'var(--interwar-silver)', fontSize: '3rem' }}>
                        </div>
                    )}
                </div>
            </Link>

            <Card.Body className="d-flex flex-column">
                {product.category && (
                    <Badge className="mb-2 align-self-start"
                        style={{ backgroundColor: 'var(--interwar-gold)', color: 'var(--interwar-ink)', fontWeight: 500 }}>
                        {product.category}
                    </Badge>
                )}
                <Link href={`/shop/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card.Title className="fs-6 fw-bold" style={{ fontFamily: 'var(--font-title)', lineHeight: 1.3 }}>
                        {product.title}
                    </Card.Title>
                </Link>
                {product.description && (
                    <Card.Text className="text-muted small flex-grow-1"
                        style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {product.description}
                    </Card.Text>
                )}

                <div className="d-flex align-items-center justify-content-between mt-3">
                    <span className="fw-bold" style={{ color: 'var(--interwar-ink)', fontFamily: 'var(--font-title)', fontSize: '1.05rem' }}>
                        {product.price ? `${Number(product.price).toFixed(2)} RON` : t('Free')}
                    </span>
                    <Button size="sm" onClick={handleAdd}
                        style={{
                            backgroundColor: added ? 'var(--interwar-green)' : 'var(--interwar-ink)',
                            border: 'none',
                            transition: 'background-color .3s',
                            fontSize: '0.8rem',
                        }}>
                        {added ? `✓ ${t('Added!')}` : `${t('Add to cart')}`}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default function Shop({ products = [] }) {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    const cart = useCart();
    const [showCart, setShowCart] = useState(false);
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('');
    const [sortBy, setSortBy] = useState('default');

    const categories = useMemo(() => {
        const cats = [...new Set(products.map(p => p.category).filter(Boolean))];
        return cats.sort();
    }, [products]);

    const filtered = useMemo(() => {
        let list = products.filter(p => {
            const matchSearch = !search ||
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                (p.description ?? '').toLowerCase().includes(search.toLowerCase());
            const matchCat = !activeCategory || p.category === activeCategory;
            return matchSearch && matchCat;
        });

        if (sortBy === 'price_asc')  list = [...list].sort((a, b) => Number(a.price ?? 0) - Number(b.price ?? 0));
        if (sortBy === 'price_desc') list = [...list].sort((a, b) => Number(b.price ?? 0) - Number(a.price ?? 0));
        if (sortBy === 'name')       list = [...list].sort((a, b) => a.title.localeCompare(b.title));

        return list;
    }, [products, search, activeCategory, sortBy]);

    return (
        <>
            <Head title={t('Shop')} />
            <StandardMenuLayout>
                <div className="text-center pt-5 pb-4 px-3"
                    style={{ borderBottom: '2px solid var(--interwar-gold)', marginBottom: '2rem' }}>
                    <h1 style={{ fontFamily: 'var(--font-title)', color: 'var(--interwar-ink)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                        {t('Paris of the East')}
                        <br></br>
                        {t('Souvenir Shop')}
                    </h1>
                    <p className="text-muted">{t('Period inspired items for any budget and taste')}</p>
                </div>

                <div className="container pb-5">
                    {/* Toolbar */}
                    <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-4">
                        <div className="d-flex flex-wrap gap-2 align-items-center flex-grow-1">
                            {/* Search */}
                            <InputGroup style={{ maxWidth: 260 }}>
                                <InputGroup.Text style={{ backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)' }}>
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder={t('Search…')}
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    style={{ backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)', borderLeft: 'none' }}
                                />
                            </InputGroup>

                            {categories.length > 0 && (
                                <div className="d-flex flex-wrap gap-1">
                                    <Button size="sm" variant="link" className="text-decoration-none px-2 py-1"
                                        style={{
                                            color: activeCategory === '' ? 'var(--interwar-paper)' : 'var(--interwar-ink)',
                                            backgroundColor: activeCategory === '' ? 'var(--interwar-ink)' : 'transparent',
                                            border: '1px solid var(--interwar-ink)',
                                            borderRadius: 20,
                                            fontSize: '0.78rem',
                                        }}
                                        onClick={() => setActiveCategory('')}>
                                        {t('All')}
                                    </Button>
                                    {categories.map(cat => (
                                        <Button key={cat} size="sm" variant="link" className="text-decoration-none px-2 py-1"
                                            style={{
                                                color: activeCategory === cat ? 'var(--interwar-paper)' : 'var(--interwar-ink)',
                                                backgroundColor: activeCategory === cat ? 'var(--interwar-gold)' : 'transparent',
                                                border: '1px solid var(--interwar-gold)',
                                                borderRadius: 20,
                                                fontSize: '0.78rem',
                                            }}
                                            onClick={() => setActiveCategory(cat)}>
                                            {cat}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            {/* Sort */}
                            <Form.Select size="sm" value={sortBy} onChange={e => setSortBy(e.target.value)}
                                style={{ maxWidth: 180, backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)' }}>
                                <option value="default">{t('Default order')}</option>
                                <option value="name">{t('Name A–Z')}</option>
                                <option value="price_asc">{t('Price: low to high')}</option>
                                <option value="price_desc">{t('Price: high to low')}</option>
                            </Form.Select>

                            {/* Cart button */}
                            <Button onClick={() => setShowCart(true)} className="position-relative"
                                style={{ backgroundColor: 'var(--interwar-ink)', border: 'none', whiteSpace: 'nowrap' }}>
                                {t('Cart')}
                                {cart.count > 0 && (
                                    <Badge bg="danger" pill className="position-absolute"
                                        style={{ top: -6, right: -6, fontSize: '0.7rem' }}>
                                        {cart.count}
                                    </Badge>
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Results count */}
                    <p className="text-muted small mb-3">
                        {filtered.length} {t('item(s) found')}
                    </p>

                    {/* Grid */}
                    {filtered.length === 0 ? (
                        <div className="text-center py-5">
                            <div style={{ fontSize: '3rem' }}></div>
                            <p className="text-muted mt-2">{t('No products found.')}</p>
                        </div>
                    ) : (
                        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                            {filtered.map(product => (
                                <Col key={product.id}>
                                    <ProductCard product={product} onAdd={cart.add} t={t} />
                                </Col>
                            ))}
                        </Row>
                    )}
                </div>

                {cart.count > 0 && (
                    <div className="d-md-none position-fixed bottom-0 start-0 end-0 p-3"
                        style={{ zIndex: 1050, background: 'linear-gradient(to top, var(--interwar-paper) 70%, transparent)' }}>
                        <Button onClick={() => setShowCart(true)} className="w-100 shadow"
                            style={{ backgroundColor: 'var(--interwar-ink)', border: 'none', fontFamily: 'var(--font-title)' }}>
                            {t('View Cart')} · {cart.count} {t('items')} · {cart.total.toFixed(2)} RON
                        </Button>
                    </div>
                )}
            </StandardMenuLayout>

            <CartDrawer show={showCart} onHide={() => setShowCart(false)} cart={cart} t={t} />

            <div className="display-6 d-flex align-items-end justify-content-center">{t('We are terribly sorry for the inconvenience, this page is still under construction')}</div>
            <div className="display-6 d-flex align-items-end justify-content-center mt-3 pb-4">{t('We kindly ask you to try our other pages!')}</div>
        </>
    );
}
