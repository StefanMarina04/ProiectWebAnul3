import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, router } from '@inertiajs/react';
import { Tab, Tabs, Table, Button, Modal, Form, Badge, Alert } from 'react-bootstrap';

function ConfirmModal({ show, title, body, onConfirm, onCancel, processing }) {
    return (
        <Modal show={show} onHide={onCancel} centered>
            <Modal.Header closeButton style={{ backgroundColor: 'var(--interwar-paper)' }}>
                <Modal.Title style={{ fontFamily: 'var(--font-title)' }}>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: 'var(--interwar-paper)' }}>{body}</Modal.Body>
            <Modal.Footer style={{ backgroundColor: 'var(--interwar-paper)' }}>
                <Button variant="secondary" onClick={onCancel} disabled={processing}>Cancel</Button>
                <Button variant="danger" onClick={onConfirm} disabled={processing}>
                    {processing ? 'Deleting…' : 'Delete'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function UserModal({ show, user, onClose, t }) {
    const isEdit = !!user;
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: user?.name ?? '',
        email: user?.email ?? '',
        role: user?.role ?? 'user',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route('admin.users.update', user.id), {
                onSuccess: () => { reset(); onClose(); },
            });
        } else {
            post(route('admin.users.store'), {
                onSuccess: () => { reset(); onClose(); },
            });
        }
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton style={{ backgroundColor: 'var(--interwar-paper)' }}>
                <Modal.Title style={{ fontFamily: 'var(--font-title)' }}>
                    {isEdit ? t('Edit User') : t('New User')}
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={submit}>
                <Modal.Body style={{ backgroundColor: 'var(--interwar-paper)' }}>
                    <Form.Group className="mb-3">
                        <Form.Label>{t('Name')}</Form.Label>
                        <Form.Control
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            isInvalid={!!errors.name}
                            required
                        />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>{t('Email')}</Form.Label>
                        <Form.Control
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            isInvalid={!!errors.email}
                            required
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>{t('Role')}</Form.Label>
                        <Form.Select value={data.role} onChange={e => setData('role', e.target.value)}>
                            <option value="user">{t('User')}</option>
                            <option value="admin">{t('Admin')}</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>{isEdit ? t('New Password (leave blank to keep)') : t('Password')}</Form.Label>
                        <Form.Control
                            type="password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            isInvalid={!!errors.password}
                            required={!isEdit}
                        />
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>{t('Confirm Password')}</Form.Label>
                        <Form.Control
                            type="password"
                            value={data.password_confirmation}
                            onChange={e => setData('password_confirmation', e.target.value)}
                            required={!isEdit || data.password !== ''}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'var(--interwar-paper)' }}>
                    <Button variant="secondary" onClick={onClose} disabled={processing}>{t('Cancel')}</Button>
                    <Button
                        type="submit"
                        disabled={processing}
                        style={{ backgroundColor: 'var(--interwar-gold)', border: 'none', color: 'var(--interwar-ink)' }}
                    >
                        {processing ? t('Saving…') : t('Save')}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

function ProductModal({ show, product, onClose, t }) {
    const isEdit = !!product;
    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: product?.title ?? '',
        description: product?.description ?? '',
        price: product?.price ?? '',
        category: product?.category ?? '',
        status: product?.status ?? 'active',
        image_url: product?.image_url ?? '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route('admin.products.update', product.id), {
                onSuccess: () => { reset(); onClose(); },
            });
        } else {
            post(route('admin.products.store'), {
                onSuccess: () => { reset(); onClose(); },
            });
        }
    };

    return (
        <Modal show={show} onHide={onClose} centered size="lg">
            <Modal.Header closeButton style={{ backgroundColor: 'var(--interwar-paper)' }}>
                <Modal.Title style={{ fontFamily: 'var(--font-title)' }}>
                    {isEdit ? t('Edit Item') : t('New Item')}
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={submit}>
                <Modal.Body style={{ backgroundColor: 'var(--interwar-paper)' }}>
                    <Form.Group className="mb-3">
                        <Form.Label>{t('Title')}</Form.Label>
                        <Form.Control
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            isInvalid={!!errors.title}
                            required
                        />
                        <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>{t('Description')}</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            isInvalid={!!errors.description}
                        />
                        <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                    </Form.Group>

                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>{t('Price')} (RON)</Form.Label>
                                <Form.Control
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={data.price}
                                    onChange={e => setData('price', e.target.value)}
                                    isInvalid={!!errors.price}
                                />
                                <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>{t('Category')}</Form.Label>
                                <Form.Control
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                    isInvalid={!!errors.category}
                                />
                                <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label>{t('Image URL')}</Form.Label>
                        <Form.Control
                            value={data.image_url}
                            onChange={e => setData('image_url', e.target.value)}
                            placeholder="https://..."
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>{t('Local Image')}</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={e => setData('image', e.target.files[0])}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>{t('Status')}</Form.Label>
                        <Form.Select value={data.status} onChange={e => setData('status', e.target.value)}>
                            <option value="active">{t('Active')}</option>
                            <option value="inactive">{t('Inactive')}</option>
                            <option value="draft">{t('Draft')}</option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'var(--interwar-paper)' }}>
                    <Button variant="secondary" onClick={onClose} disabled={processing}>{t('Cancel')}</Button>
                    <Button
                        type="submit"
                        disabled={processing}
                        style={{ backgroundColor: 'var(--interwar-gold)', border: 'none', color: 'var(--interwar-ink)' }}
                    >
                        {processing ? t('Saving…') : t('Save')}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default function AdminPanel({ users = [], products = [], flash = {} }) {
    const { translations, auth } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    const [showUserModal, setShowUserModal]     = useState(false);
    const [editingUser, setEditingUser]         = useState(null);
    const [deletingUser, setDeletingUser]       = useState(null);
    const [userDeleteProcessing, setUserDeleteProcessing] = useState(false);
    const [userSearch, setUserSearch]           = useState('');

    const [showProductModal, setShowProductModal]   = useState(false);
    const [editingProduct, setEditingProduct]       = useState(null);
    const [deletingProduct, setDeletingProduct]     = useState(null);
    const [productDeleteProcessing, setProductDeleteProcessing] = useState(false);
    const [productSearch, setProductSearch]         = useState('');

    const filteredUsers = users.filter(u =>
        u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
        u.email.toLowerCase().includes(userSearch.toLowerCase())
    );

    const handleDeleteUser = () => {
        setUserDeleteProcessing(true);
        router.delete(route('admin.users.destroy', deletingUser.id), {
            onFinish: () => { setUserDeleteProcessing(false); setDeletingUser(null); },
        });
    };

    const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes(productSearch.toLowerCase()) ||
        (p.category ?? '').toLowerCase().includes(productSearch.toLowerCase())
    );

    const handleDeleteProduct = () => {
        setProductDeleteProcessing(true);
        router.delete(route('admin.products.destroy', deletingProduct.id), {
            onFinish: () => { setProductDeleteProcessing(false); setDeletingProduct(null); },
        });
    };

    const statusBadge = (status) => {
        const map = { active: 'success', inactive: 'secondary', draft: 'warning' };
        return <Badge bg={map[status] ?? 'secondary'}>{t(status ?? 'unknown')}</Badge>;
    };

    const roleBadge = (role) => (
        <Badge bg={role === 'admin' ? 'danger' : 'primary'}>{t(role)}</Badge>
    );

    return (
        <AuthenticatedLayout>
            <Head title={t('Admin Panel')} />

            <div className="py-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h2 style={{ fontFamily: 'var(--font-title)', color: 'var(--interwar-ink)' }}>
                        {t('Administration Panel')}
                    </h2>
                    <span className="text-muted small">
                        {t('Logged in as')} <strong>{auth.user.name}</strong>
                    </span>
                </div>

                {flash.success && (
                    <Alert variant="success" dismissible>{flash.success}</Alert>
                )}
                {flash.error && (
                    <Alert variant="danger" dismissible>{flash.error}</Alert>
                )}

                <div className="row g-3 mb-4">
                    <div className="col-6 col-md-3">
                        <div className="card text-center h-100" style={{ border: '1px solid var(--interwar-gold)', backgroundColor: 'var(--interwar-paper)' }}>
                            <div className="card-body">
                                <div className="fs-2 fw-bold" style={{ color: 'var(--interwar-gold)' }}>{users.length}</div>
                                <div className="text-muted small">{t('Total Users')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card text-center h-100" style={{ border: '1px solid var(--interwar-gold)', backgroundColor: 'var(--interwar-paper)' }}>
                            <div className="card-body">
                                <div className="fs-2 fw-bold" style={{ color: 'var(--interwar-red)' }}>
                                    {users.filter(u => u.role === 'admin').length}
                                </div>
                                <div className="text-muted small">{t('Admins')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card text-center h-100" style={{ border: '1px solid var(--interwar-gold)', backgroundColor: 'var(--interwar-paper)' }}>
                            <div className="card-body">
                                <div className="fs-2 fw-bold" style={{ color: 'var(--interwar-green)' }}>{products.length}</div>
                                <div className="text-muted small">{t('Total Items')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card text-center h-100" style={{ border: '1px solid var(--interwar-gold)', backgroundColor: 'var(--interwar-paper)' }}>
                            <div className="card-body">
                                <div className="fs-2 fw-bold" style={{ color: 'var(--interwar-blue)' }}>
                                    {products.filter(p => p.status === 'active').length}
                                </div>
                                <div className="text-muted small">{t('Active Items')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs defaultActiveKey="users" className="mb-3" style={{ borderBottom: '2px solid var(--interwar-gold)' }}>

                    <Tab eventKey="users" title={`${t('Users')} (${users.length})`}>
                        <div className="card shadow-sm" style={{ backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)' }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                                    <input
                                        type="search"
                                        className="form-control"
                                        style={{ maxWidth: 280 }}
                                        placeholder={t('Search users…')}
                                        value={userSearch}
                                        onChange={e => setUserSearch(e.target.value)}
                                    />
                                    <Button
                                        size="sm"
                                        onClick={() => { setEditingUser(null); setShowUserModal(true); }}
                                        style={{ backgroundColor: 'var(--interwar-gold)', border: 'none', color: 'var(--interwar-ink)' }}
                                    >
                                        + {t('Add User')}
                                    </Button>
                                </div>

                                <div className="table-responsive">
                                    <Table hover size="sm" className="align-middle">
                                        <thead style={{ backgroundColor: 'var(--interwar-ink)', color: 'var(--interwar-paper)' }}>
                                            <tr>
                                                <th>#</th>
                                                <th>{t('Name')}</th>
                                                <th>{t('Email')}</th>
                                                <th>{t('Role')}</th>
                                                <th>{t('Registered')}</th>
                                                <th className="text-end">{t('Actions')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredUsers.length === 0 ? (
                                                <tr><td colSpan={6} className="text-center text-muted py-4">{t('No users found.')}</td></tr>
                                            ) : filteredUsers.map(user => (
                                                <tr key={user.id}>
                                                    <td className="text-muted small">{user.id}</td>
                                                    <td className="fw-semibold">{user.name}</td>
                                                    <td className="text-muted small">{user.email}</td>
                                                    <td>{roleBadge(user.role)}</td>
                                                    <td className="text-muted small">
                                                        {new Date(user.created_at).toLocaleDateString()}
                                                    </td>
                                                    <td className="text-end">
                                                        <Button
                                                            size="sm"
                                                            variant="outline-secondary"
                                                            className="me-1"
                                                            onClick={() => { setEditingUser(user); setShowUserModal(true); }}
                                                        >
                                                            {t('Modify')}
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="outline-danger"
                                                            onClick={() => setDeletingUser(user)}
                                                            disabled={user.id === auth.user.id}
                                                            title={user.id === auth.user.id ? t("You can't delete yourself") : ''}
                                                        >
                                                            {t('Delete')}
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="products" title={`${t('Items')} (${products.length})`}>
                        <div className="card shadow-sm" style={{ backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)' }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                                    <input
                                        type="search"
                                        className="form-control"
                                        style={{ maxWidth: 280 }}
                                        placeholder={t('Search items…')}
                                        value={productSearch}
                                        onChange={e => setProductSearch(e.target.value)}
                                    />
                                    <Button
                                        size="sm"
                                        onClick={() => { setEditingProduct(null); setShowProductModal(true); }}
                                        style={{ backgroundColor: 'var(--interwar-gold)', border: 'none', color: 'var(--interwar-ink)' }}
                                    >
                                        + {t('Add Item')}
                                    </Button>
                                </div>

                                <div className="table-responsive">
                                    <Table hover size="sm" className="align-middle">
                                        <thead style={{ backgroundColor: 'var(--interwar-ink)', color: 'var(--interwar-paper)' }}>
                                            <tr>
                                                <th>#</th>
                                                <th>{t('Title')}</th>
                                                <th>{t('Category')}</th>
                                                <th>{t('Price')}</th>
                                                <th>{t('Status')}</th>
                                                <th>{t('Created')}</th>
                                                <th className="text-end">{t('Actions')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredProducts.length === 0 ? (
                                                <tr><td colSpan={7} className="text-center text-muted py-4">{t('No items found.')}</td></tr>
                                            ) : filteredProducts.map(product => (
                                                <tr key={product.id}>
                                                    <td className="text-muted small">{product.id}</td>
                                                    <td className="fw-semibold">{product.title}</td>
                                                    <td className="text-muted small">{product.category ?? '—'}</td>
                                                    <td className="small">
                                                        {product.price ? `${Number(product.price).toFixed(2)} RON` : '—'}
                                                    </td>
                                                    <td>{statusBadge(product.status)}</td>
                                                    <td className="text-muted small">
                                                        {new Date(product.created_at).toLocaleDateString()}
                                                    </td>
                                                    <td className="text-end">
                                                        <Button
                                                            size="sm"
                                                            variant="outline-secondary"
                                                            className="me-1"
                                                            onClick={() => { setEditingProduct(product); setShowProductModal(true); }}
                                                        >
                                                            {t('Modify')}
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="outline-danger"
                                                            onClick={() => setDeletingProduct(product)}
                                                        >
                                                            {t('Delete')}
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>

            <UserModal
                show={showUserModal}
                user={editingUser}
                onClose={() => { setShowUserModal(false); setEditingUser(null); }}
                t={t}
            />

            <ProductModal
                show={showProductModal}
                product={editingProduct}
                onClose={() => { setShowProductModal(false); setEditingProduct(null); }}
                t={t}
            />

            <ConfirmModal
                show={!!deletingUser}
                title={t('Delete User')}
                body={`${t('Are you sure you want to delete')} "${deletingUser?.name}"? ${t('This action cannot be undone.')}`}
                onConfirm={handleDeleteUser}
                onCancel={() => setDeletingUser(null)}
                processing={userDeleteProcessing}
            />

            <ConfirmModal
                show={!!deletingProduct}
                title={t('Delete Item')}
                body={`${t('Are you sure you want to delete')} "${deletingProduct?.title}"? ${t('This action cannot be undone.')}`}
                onConfirm={handleDeleteProduct}
                onCancel={() => setDeletingProduct(null)}
                processing={productDeleteProcessing}
            />
        </AuthenticatedLayout>
    );
}
